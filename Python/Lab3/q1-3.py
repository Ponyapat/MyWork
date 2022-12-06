a,b,c, = input().split()
a = int(a)
b = int(b)
c = int(c)
if a > b:
    if a < c:
        median = a
    elif b > c:
        median = b
    else:
        median = c
else:
    if a > c:
        median = a
    elif b < c:
        median = b
    else:
        median = c

print( median)
