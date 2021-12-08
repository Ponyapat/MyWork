a = int(input())
i = 0
num1 = 0
num2 = 1

while a > i:
    if i <= 1:
        result = i
        print(result)
    else:
        result = num1 + num2
        num1 = num2
        num2 = result
        print(result)
    i += 1

