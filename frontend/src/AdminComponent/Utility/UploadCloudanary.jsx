const upload_preset ='sachi-food' //cloudanary account eke preset name eka 
const cloud_name = 'dpsuirjir'// cloudanary account eke account name eka
const api_url =`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`

export const uploadImageToCloudanary=async(file)=> {
    const data = new FormData();

    data.append('file',file);
    data.append('upload_preset',upload_preset)
    data.append('cloud_name',cloud_name)

    const res = await fetch(api_url,{method:'post',body:data});

    const fileData = await res.json();
    console.log('file data : ',fileData);
    return fileData.url
}