import Image from './image.model.js';


 

  export const imageRouter = async (req, res) => {
    
 {
            const {
                name,
                email,
                password
            } = req.body


            const newImage = new Image({
                name,
                email,
                password
            })
            await newImage.save()
            console.log('registered succesfully',newImage)
            return res.redirect('home.html')
            ;
        }
    }


export default imageRouter