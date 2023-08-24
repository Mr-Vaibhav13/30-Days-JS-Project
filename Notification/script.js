let toastBox = document.getElementById('toastBox');


let successMsg = 'Successfully Submit';
let errorMsg = 'There is an Error';
let invalidMsg = 'Invalid Message';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML= msg;
    toastBox.appendChild(toast);

    setTimeout(()=>{
        toast.remove();
    },3000);
}