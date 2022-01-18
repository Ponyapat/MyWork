def createSeatMap():
    row, col = input().split()
    row = int(row)
    col = int(col)
    s = []
    for i in range(row):
        s.append([0]*col)
    return s
