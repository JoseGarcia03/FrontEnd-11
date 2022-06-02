
export const uploadFile = async( file ) => {
    const cloudUrl = "https://api.cloudinary.com/v1_1/dpkaiokho/upload";
    const formData = new FormData();
    formData.append('upload_preset', 'crud2-heroku');
    formData.append('file', file);

    const resp = await fetch(cloudUrl, {
        method: 'POST',
        body: formData
    });
    const cloudResp = await resp.json();
    return cloudResp.secure_url
}
