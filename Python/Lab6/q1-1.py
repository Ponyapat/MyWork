#list = [int(item) for item in input().split()]
list = input().split()
sum = 0
l1 = []
l2 = []

for i in range(len(list)):
    sum = sum + int(list[i])

sum = sum / len(list)

for i in range(len(list)):
    if int(list[i]) >= sum:
        l1.append(int(list[i]))
    else:
        l2.append(int(list[i]))

print(l1)
print(l2)
