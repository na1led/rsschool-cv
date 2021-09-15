let burger = document.querySelectorAll('.header__nav_burger')
let burgerLine = document.querySelectorAll('.burger-line')
let burgerList = document.querySelectorAll('.header__nav_burger-list')
for (let i = 0; i < burger.length; i++) {
    burger[i].addEventListener('click', function () {

        burger[i].classList.toggle('burger-active')
        burgerList[0].classList.toggle('burger_list-active')

        

        if(burger[i].classList.contains('burger-active')){
            console.log('active');
            burgerLine[0].classList.add('upper_line-active')
            burgerLine[1].classList.add('middle_line-active')
            burgerLine[2].classList.add('lower_line-active')
            

        }else{
            burgerLine[0].classList.remove('upper_line-active')
            burgerLine[1].classList.remove('middle_line-active')
            burgerLine[2].classList.remove('lower_line-active')

        }
    })
    
}