import math

x = float(input())

y = 10*math.pow(x,2) + math.pow(0.5,(3*x + 1 )) + math.sqrt( 2*math.pow(x,2)  + 1) - 2*math.pi

print('{0:.3f}'.format(y))
