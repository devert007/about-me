#include <iostream>
#include <string.h>
#define MAX 100
using namespace std;

int main()
{
  char *str = new char[MAX];

  int temp;

  cin.getline(str, MAX);
  int p = strlen(str);
  int i = 0;
  while (i < p)
    if (str[i] == ' ' || str[i] == '\0')
    {
      temp = str[i - 1];
      str[i - 1] = str[i];
      str[i] = temp;
      cout << str[i] << ' ';
      i++;
    }

  delete[] str;
  return 0;
}