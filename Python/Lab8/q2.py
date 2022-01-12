def createNewList(a):
    list = []
    for i in range(len(a)):
        if a[i] % 3 == 0:
            list.append(a[i])
    return list
