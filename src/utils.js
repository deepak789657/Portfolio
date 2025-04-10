export const getImageUrl = (path)=>{
    return new URL(`/assets /${path}`,import.meta.url).href;
}

// 23:46 