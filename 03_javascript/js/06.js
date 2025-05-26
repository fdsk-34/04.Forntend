let name1 = '홍길동';
let age1 = 23;
let phone1 = '011-1111-1111';
let weight1 = 72.55;

let name2 = '임꺽정';
let age2 = 30;
let phone2 = '011-2222-2222';
let weight2 = 79;

let name3 = '강감찬';
let age3 = 66;
let phone3 = '011-3333-3333';
let weight3 = 51.55;

let name4 = '세종대왕';
let age4 = 75;
let phone4 = '011-4444-4444';
let weight4 = 88.55;

function my_info() {

 // ` (백틱)  : 문자열과 변수를 + 연결 기호를 사용하지 않고 , 한번에 처리 : $(변수명)
 // 리액트 : 코드를 간결하게 처리함.
    



  alert(`\t 이름은 : $(name1), 이고 \n
    나이는 : $(age1),이고 \n
    번호는 : $(phone1),이고\n 
    몸무게는 : $(weight1)입니다`);
}

function brother_info() {
  document.write('형제의 <strong>이름은</strong> : ' + name2 + '<br><br>');
  document.write('형제의 나이는 : ' + age2 + '<br><br>');
  document.write('형제의 번호는 : ' + phone2 + '<br><br>');
  document.write('형제의 몸무게는 : ' + weight2 + '<br><br>');
}

function parent_info() {
  document.write('부모의 <strong>이름은</strong> : ' + name3 + ', ' + name4 + '<br><br>');
  document.write('부모의 나이는 : ' + age3 + ', ' + age4 + '<br><br>');
  document.write('부모의 번호는 : ' + phone3 + ', ' + phone4 + '<br><br>');
  document.write('부모의 몸무게는 : ' + weight3 + ', ' + weight4 + '<br><br>');

  console.log('부모 정보 출력됨');
}