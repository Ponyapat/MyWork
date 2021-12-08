list = [int(item) for item in input().split()]
sum = 0
l1 = []
l2 = []

for i in range(len(list)):
    sum = sum + list[i]

sum = sum / len(list)

for i in range(len(list)):
    if list[i] >= sum:
        l1.append(list[i])
    else:
        l2.append(list[i])

print(l1)
print(l2)
