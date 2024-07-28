import React from "react";
import { useLoaderData } from "react-router-dom";
function GitHub(){
const data = useLoaderData()
    // const [data,setdata]= useState({});
//     useEffect(()=>{
//     fetch('https://api.github.com/users/hiteshchoudhary')
//     .then((res)=>res.json())
//     .then((data)=>setdata(data))
// },)

return (
    <>
    <h1 className="p-5 text-xl  flex flex-col items-center justify-center" >
        Github followers :{data.followers}
    </h1>
    <img src={data.avatar_url} alt="" />
    </>
)
}
export default GitHub;

// export const Gitinfo = async () => {
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('There has been a problem with your fetch operation:', error);
//         throw error;
//     }
// };


export const Gitinfo = () => {
    return fetch('https://api.github.com/users/Sophanstha')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            throw error;
        });
};
