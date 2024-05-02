#include <iostream>
using namespace std;

int findsmallestposition(int *array, int startposition, int size)
{
  int smallestposition = startposition;
  for (int i = smallestposition; i < size; i++)
  {
    if (array[i] < array[smallestposition])
    {
      smallestposition = i;
    }
  }
  return smallestposition;
}
void selection_sort(int *array, int size)
{
  for (int i = 0; i < size; i++)
  {
    int smallestposition = findsmallestposition(array, i, size);
    int temp = array[i];
    array[i] = array[smallestposition];
    array[smallestposition] = temp;
  }
}
int binary_search(int *list, int num, int min, int max)
{
  int mid = min + (max - min) / 2;
  if (min > max)
    return -1;
  if (list[mid] == num)
    return mid;
  else if (list[mid] < num)
    binary_search(list, num, mid + 1, max);
  else if (list[mid] > num)
    binary_search(list, num, min, mid - 1);
  else
    return -1;
}
int main()
{
  int n;
  int x;
  int min, max;
  cout << "enter size " << '\n';
  cin >> n;
  int *arr = new int[n];
  cout << "enter an elements of your massiv " << '\n';
  for (int i = 0; i < n; i++)
    cin >> arr[i];
  selection_sort(arr, n);
  for (int i = 0; i < n; i++)
    cout << arr[i] << ' ';
  cout << "------------------------------------------------------" << '\n';
  cout << "enter a borders ";
  cin >> min >> max;
  cout << "enter an element to search " << '\n';
  cin >> x;
  cout << "position of your element" << x << "is " << binary_search(arr, x, min, max);
  delete[] arr;
  return 0;
}
