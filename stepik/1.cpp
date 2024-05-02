#include <iostream>
using namespace std;
int main()
{
  int n;
  cin >> n;
  char **matrix;
  matrix = new char *[n];
  for (int i = 0; i < n; i++)
    matrix[i] = new char[n];
  for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
    {
      matrix[i][j] = '.';
      if ((i == j))
        matrix[i][j] = '*';
      if (i == n / 2)
        matrix[i][j] = '*';
      if (j == n / 2)
        matrix[i][j] = '*';
      if (j == n - i - 1)
        matrix[i][j] = '*';
    }

  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < n; j++)
    {
      cout << matrix[i][j] << ' ';
    }
    cout << '\n';
  }
  delete[] matrix;
  return 0;
}