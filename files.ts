/** @satisfies {import('@webcontainer/api').FileSystemTree} */

const files = {
  "index.js": {
    file: {
      contents: `
      function LikeButton() {
        const [like, setLike] = React.useState(0)
        
        return (
          <div style={{padding:"10px", backgroundColor:"Grey", height:"auto", width:"150px"}}>
            <p style={{padding:"10px"}}>{like} Likes</p>
            <div style={{display:"flex", flexDirection:"column"}}>
              <button style={{margin:"10px", padding:"10px", border:"none"}} onClick={() => {setLike(like + 1)}} >Increase</button>
              <button style={{margin:"10px", padding:"10px", border:"none"}} onClick={() => {setLike(like - 1)}} >Decrease</button>
              <button style={{margin:"10px", padding:"10px", border:"none"}} onClick={() => {setLike(0)}} >Zero</button>
            </div>
          </div>
          
        )
      }
      `,
    },
  },
  "package.json": {
    file: {
      contents: `
  {
    "name": "example",
    "type": "module",
    "dependencies": {
      "react": "^18.2.0"
    },
    "devDependencies": {
      "@types/react": "^18.0.27"
    },
    "scripts": {
      "build": "tsc && vite build"
    }
  }`,
    },
  },
};

export default files;
