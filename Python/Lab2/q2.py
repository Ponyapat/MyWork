import math 

x = float(input())

y = math.pow(3,-(2*x-0.5)) + math.sqrt(math.pow(x,2) + 0.25) + 3*math.cos(2*math.pi*x)

print('{:.3f}'.format(y))