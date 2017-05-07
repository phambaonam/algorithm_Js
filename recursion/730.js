/**
 * Created by doremonsun on 5/7/17.
 */
//todo: tính  S(n) = 1 + 2 + 3 + 4 + ... + n , n là số tự nhiên
// TODO: cần nhớ lại giữa sự khác biệt global variable với local variable
let log = console.log
let n = 5
/*---------------------*/
let sumFor = 0
for (let i = 0; i <= n; i++)
    sumFor += i
log('using for loop normal, result = ', sumFor)
/*---------------------*/
log('--------')
// sum(5) = 5 + 4 + 3 + 2 + 1
// Sum = n + S(n -1)
// n = 1  || n = 0 thi dừng lại
let sum = 1
sumRecursion = (n) => {
    // dieu kien dung
    if (n === 1 || n === 0)
        return 1
    sum += n
    sumRecursion(n - 1)
    return sum

    // TODO: đây là cách viết gọn hơn
    if (n === 1 || n === 0)
        return 1
    // goi lai de quy
    return n + sumRecursion(n - 1)

}
log('using recursion, result = ', sumRecursion(n))

/*-----------------*/
log('--------')
KhuDeQuy = (n) => {
    let sum = 1
    for (let i = 2; i <= n; i++)
        sum += i
    return sum
}
log('Khử đệ quy, result = ', KhuDeQuy(n))

/*------------------*/
log('--------')
DeQuyDuoi = (n, x = 1) => {
    if (n === 1)
        return x
    return DeQuyDuoi(n - 1, x + n)
}
log('Đệ quy đuôi, result = ', DeQuyDuoi(n))
