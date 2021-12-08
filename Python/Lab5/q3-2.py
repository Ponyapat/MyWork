import math

a, b, r = input().split()
a = int(a)
b = int(b)
r = float(r)
sum = 0

if a >= 0 and b >= 0 and a <= b:
    for i in range(a, b + 1):
       sum = sum + math.pow(r, i)

print('{:.4f}'.format(sum))
