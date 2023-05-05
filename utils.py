import os

def get_file_list(folder_path: str):
    # folder_path = "docs/Command/Linux"  # 将此处的路径替换为您要读取的文件夹的路径
    file_names = []

    for file in os.listdir(folder_path):
        if os.path.isfile(os.path.join(folder_path, file)):
            # file_names.append(file)
            file_names.append('{ text: "'+file.split('.')[0]+'", link: "'+file+'" }')
    
    return file_names

def print_file_list(folder_path):
    file_names = get_file_list(folder_path)

    for file in file_names:
        print(file + ',')


def print_file_list_plus(folder_path):
    file_names = get_file_list(folder_path)
    top = "/" + "/".join(folder_path.split("/")[1:])
    print('"' + top + '": [')
    for file in file_names:
        print(file + ',')
    print('],')

def main():
    folder_path = "docs/Java/FunctionalProgramming/"

    # print_file_list(folder_path)
    print_file_list_plus(folder_path)

if __name__ == '__main__':
    main()

