//generate a random variable

const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
    const para = document.createElement('p');

   
function chooseName(random){
    return( names[Math.floor(Math.random()* names.length)])
    }
    console.log(chooseName(random))

    
function random(min, max) {  
    return Math.floor(Math.random() * (max - min) + min)
  }
  
  console.log(random(10, 200)
  )
  





// function chooseName(names) {
//   let random = Math.floor(Math.random() * names.length);
//   let random2 = Math.floor(Math.random() * names.length);
//   while (random === random2) {
//     random2 = Math.floor(Math.random() * names.length);
//   }

//   while (names.length > 0) {
//     names.splice(random, 1);
//     names.splice(random2, 1);
//     return [names[random], names[random2]];
//   }
// }
// console.log(chooseName(names));

  
   





    // Don't edit the code below here!

    // const section = document.querySelector('section');

    // section.appendChild(para);
    

//let preview=document.querySelector('.preview')
//et h