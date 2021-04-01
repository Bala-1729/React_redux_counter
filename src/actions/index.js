export function increment() {
    return {
       type: 'INCREMENT'
    }
 }
 export function decrement() {
    return {
       type: 'DECREMENT'
    }
 }

 export function addcounter() {
    return {
       type: 'ADDCOUNTER'
    }
 }
 
 export function subcounter() {
    return {
       type: 'SUBCOUNTER'
    }
 }
 
 export function addresults(data) {
     return {
         type: 'ADDRESULTS',
         payload:data
     }
 }

 