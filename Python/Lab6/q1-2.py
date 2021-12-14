list = input().split()
even = []
odd = []
#num = []

#for i in list:
    #temp = int(list)
    #num.append(temp)

for i in range(len(list)):
    if int(list[i]) % 2 == 0:
        even.append(int(list[i]))
    else:
        odd.append(int(list[i]))

print(even)
print(odd)
