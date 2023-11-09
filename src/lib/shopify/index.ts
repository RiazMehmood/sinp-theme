import { exit } from "process";
import { SHOPIFY_GRAPHQL_API_ENDPOINT } from "../constants";
import { isShopifyError } from "../type-guards";
import { ensureStartsWith } from "../utils";
import { HeroImage } from "./types";

const domain = process.env.SHOPIFY_STORE_DOMAIN
  ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, 'https://')
  : '';
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

export async function shopifyFetch<T>({
    cache = 'no-cache',
    headers,
    query,
    tags,
    variables
  }: {
    cache?: RequestCache;
    headers?: HeadersInit;
    query: string;
    tags?: string[];
    variables?: ExtractVariables<T>;
  }): Promise<{ status: number; body: T } | never> {
    try {
      const result = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': key,
          ...headers
        },
        body: JSON.stringify({
          ...(query && { query }),
          ...(variables && { variables })
        }),
        cache,
        ...(tags && { next: { tags } })
      });
  
      const body = await result.json();
  
      if (body.errors) {
        throw body.errors[0];
      }
  
      return {
        status: result.status,
        body
      };
    } catch (e) {
      if (isShopifyError(e)) {
        throw {
          cause: e.cause?.toString() || 'unknown',
          status: e.status || 500,
          message: e.message,
          query
        };
      }
  
      throw {
        error: e,
        query
      };
    }
  }

  export async function getHomeHeroImage(){
    const query = `
    query getHomeHeroImage {
        metaobject(handle: {handle: "metadata_hero_image", type: "metadata_hero_image"}) {
          fields {
            value
            type
            reference {
              ... on MediaImage {
                id
                alt
                image {
                  url
                }
              }
            }
            key
          }
        }
      }
    `

    const res = await shopifyFetch<any>({query,cache:"no-cache"})

   

    let imageObject:HeroImage={
      button:"",
      detail:"",
      topText:"",
      heading:"",
      image:""
    }

    if(res.status==200)
    {
        res.body.data.metaobject.fields.map((i:any,index:number)=>{
            if(i.key=="button_text")
              imageObject["button"]=i.value
            else if(i.key=="detail")
              imageObject["detail"]=i.value
            else if(i.key=="feel_the_rhythm")
              imageObject["topText"]=i.value
            else if(i.key=="heading_text")
              imageObject["heading"]=i.value
            else if(i.key=="hero_image")
            {
              imageObject["image"]=i.reference.image.url
            }
        })
        
        return imageObject
    }
    else
    {
        console.error("section hero image metaobject not found")
    }
  }

export async function getHomeHeroSlider()
{
  const query=`
  query getHomeHeroSliderQuery {
    metaobject(handle: {handle: "home-slider-hero", type: "home_slider"}) {
      fields {
        references(first: 2) {
          edges {
            node {
              ... on Metaobject {
                fields {
                  value
                  key
                  reference {
                    ... on MediaImage {
                      id
                      image {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `

  const res = await shopifyFetch<any>({query,cache:"no-cache"})

  let imageObjectList:HeroImage[]=[]

  if(res.status==200)
  {
    const data = res.body.data.metaobject.fields[0].references.edges
    data.map((item:any,index:number)=>{
      const nodeData = item.node.fields
      const imageObject:HeroImage={
        button:"",
        detail:"",
        topText:"",
        heading:"",
        image:""
      }

      nodeData.map((node:any)=>{
        if(node.key=="button_text")
          imageObject["button"]=node.value
        else if(node.key=="detail")
          imageObject["detail"]=node.value
        else if(node.key=="top_text")
          imageObject["topText"]=node.value
        else if(node.key=="heading")
          imageObject["heading"]=node.value
        else if(node.key=="image")
          imageObject["image"]=node.reference.image.url
        
      })
      imageObjectList.push(imageObject)
    })
  }
  return imageObjectList 
}

export async function getHomeTwoProducts()
{
const query=`
query getHomeTwoProducts {
  metaobject(handle: {handle: "home-two-products", type: "home_two_products"}) {
    fields {
      references(first: 2) {
        edges {
          node {
            ... on Metaobject {
              fields {
                value
                reference {
                  ... on MediaImage {
                    id
                    image {
                      url
                    }
                  }
                }
                key
              }
            }
          }
        }
      }
    }
  }
}
`

const res = await shopifyFetch<any>({query,cache:"no-cache"})

let imageObjectList:HeroImage[]=[]

if(res.status==200)
{
  const data = res.body.data.metaobject.fields[0].references.edges
  data.map((item:any,index:number)=>{
    const nodeData = item.node.fields
    const imageObject:HeroImage={
      button:"",
      detail:"",
      topText:"",
      heading:"",
      image:""
    }
    
    nodeData.map((node:any)=>{
      if(node.key=="button_text")
        imageObject["button"]=node.value
      else if(node.key=="detail")
        imageObject["detail"]=node.value
      else if(node.key=="top_text")
        imageObject["topText"]=node.value
      else if(node.key=="heading")
        imageObject["heading"]=node.value
      else if(node.key=="image")
        imageObject["image"]=node.reference.image.url
      
    })
    imageObjectList.push(imageObject)
  })
}
return imageObjectList 
}

