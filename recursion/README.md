## Đệ quy là là một thuật toán hay để xử lý các vấn đề, bài toán liên quan đến tính lập lại, nó giúp code của chúng ta ngắn, dễ nhìn và có thể là dễ hiểu hơn
### Một hàm gọi chính nó hay hàm A gọi hàm B, hàm B lại gọi lại hàm A hay hàm A gọi hàm B, B gọi C và C lại gọi A, v.v
### Tuy vậy không phải lúc nào chúng ta cũng nên sử dụng đệ quy vì sẽ rất khó để quản lý số vòng lặp dẫn đến StackOverFlow.
### Có 2 loại đệ quy chính là đệ quy đầu và đệ quy đuôi.
### Ví dụ tính tổng các số nguyên ```sum(5) = 1 + 2 + 3 + 4 + ..+ n```
* Đệ quy đầu là một hàm sẽ gọi đệ quy rồi mới thực hiện các phép tính khác trong hàm, có thể sử dụng kết quả của phép đệ quy trước đó.
```javascript
    sumRecursion = (n) => {
        if (n === 1 || n === 0)
            return 1
        return n + sumRecursion(n - 1)
    }
    sumRecursion(5)
```

#### Hàm này thực hiện như sau
```
1. Đầu tiên sẽ kiểm tra n có bằng 1 hay bằng 0 hay không?
2. Nếu có thì trả lại 1.
3. Nếu không có thì lấy n hiện tại cộng với kết quả của 1 đệ quy khác.
```
#### Khi chạy chương trình sẽ được thực hiện như sau:
```javascript
    sumRecursion(5)
    5 + sumRecursion(4)
    5 + (4 + sumRecursion(3))
    5 + (4 + (3 + sumRecursion(2)))
    5 + (4 + (3 + (2 + sumRecursion(1))))
    5 + (4 + (3 + (2 + 1)))
    15
```

```
Lúc gọi sumRecursion(5), chương trình phải tính toán sumRecursion(4) trước nên sumRecursion(5) sẽ được lưu lại trong call stack,
sumRecursion(4) được gọi, cứ như vậy sumRecursion(5), sumRecursion(4), sumRecursion(3), sumRecursion(2) sẽ được lưu lại trong call stack,
đến khi sumRecursion(1) được gọi trả về kết quả, sumRecursion(2), sumRecursion(3), sumRecursion(4), sumRecursion(5) mới được gọi ra từ call stack và trả về kết quả.
```

* Đệ quy đuôi là tất cả phép tính được thực hiện trước rồi mới gọi đệ quy sau cùng.
```javascript
    sumRecursion = (n, sum = 0) => {
        if (n === 0)
            return sum
        return sumRecursion(n - 1, sum + n)
    }
    sumRecursion(5)
```
#### Kết quả chạy:
```javascript
    sumRecursion(5, 0)
    sumRecursion(4, 5)
    sumRecursion(3, 9)
    sumRecursion(2, 12)
    sumRecursion(1, 14)
    sumRecursion(0, 15)
    15
```

# Khử đệ quy
