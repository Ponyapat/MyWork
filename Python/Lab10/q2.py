def showStandardGrades(studentList):
    for i in studentList:
        i["total"] = i["attendance"]+i["midterm"]+i["final"] + i["lab"][0]+i["lab"][1]+i["lab"][2]+i["lab"][3]

    for i in studentList:
        if i["total"] >= 80:
            print(i["name"], 'A')
        elif i["total"] >= 70:
            print(i["name"], 'B')
        elif i["total"] >= 60:
            print(i["name"], 'C')
        elif i["total"] >= 50:
            print(i["name"], 'D')
        else:
            print(i["name"], 'F')
