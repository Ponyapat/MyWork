list = input().split()
minSum = 0
index = 0

for i in range(len(list)):
    list[i] = int(list[i])

b = int(input())


for j in range(b):
    minSum += list[j]



for i in range(1, len(list)-b+1):
    Sum = 0
    for j in range(i, i+b):
        Sum += list[j]
    if Sum < minSum:
        minSum = Sum
        index = i

print(minSum)
print(index)
