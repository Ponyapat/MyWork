m, n, x = input().split()
m = int(m)
n = int(n)
x = int(x)

result = 0
while m <= n:
    if m % x == 0:
        result += m
    m += 1

print(result)
