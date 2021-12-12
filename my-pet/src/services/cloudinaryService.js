

export const uploadImage = (data) => {
   return fetch('https://api.cloudinary.com/v1_1/dr2keg2us/image/upload',{
            method: 'POST',
            body: data
        })
        .then(res => res.json())
        .then(res => {
            if (res.public_id) {
                return res.public_id;
            }else{
                throw new Error('Failed to upload the image!');
            }
        });
}