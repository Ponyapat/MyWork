list = input().split()
maxSum = 0
index = 0

for i in range(len(list)):
    list[i] = int(list[i])

b = int(input())


for j in range(b):
    maxSum += list[j]

for i in range(1, len(list)-b+1):
    Sum = 0
    for j in range(i, i+b):
        Sum += list[j]
    if Sum > maxSum:
        maxSum = Sum
        index = i

print(maxSum)
print(index)
