m, n = input().split()
m = int(m)
n = int(n)
sum = 0

if m <= n:
    for i in range(m, n+1):
        if i % 6 == 0:
            sum += i

print(sum)
