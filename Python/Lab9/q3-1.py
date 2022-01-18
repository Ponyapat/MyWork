def showSeat(s):
    row = len(s)
    col = len(s[0])
    for i in range(row):
        for j in range(col):
            if s[i][j] == 1:
                print("X", end=" ")
            else:
                print("_", end=" ")
        print()
