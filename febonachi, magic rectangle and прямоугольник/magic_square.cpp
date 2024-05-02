#include <iostream>
#include <math.h>
#include <algorithm>

using namespace std;

void GenerateMagicSquare(int n)
{
	int magic[n][n];
	// initializing the array
	for (int i = 0; i < n; i++)
		for (int j = 0; j < n; j++)
			magic[i][j] = 0;
	// setting row and column value
	int i = n / 2;
	int j = n - 1;
	for (int k = 1; k <= n * n;)
	{
		// checking condition (c)
		if (i == -1 && j == n)
		{
			j = n - 2;
			i = 0;
		}
		else
		{
			// checking condition (a)
			if (j == n)
				j = 0;
			if (i < 0)
				i = n - 1;
		}
		// checking condition (b)
		if (magic[i][j])
		{
			j -= 2;
			i++;
			continue;
		}
		else
		{
			// placing the number into the array
			magic[i][j] = k;
			k++;
		}
		// for the next number setting (i-1, j+1)
		j++;
		i--;
	}
	// printing the matrix
	for (int i = 0; i < n; i++)
	{
		for (int j = 0; j < n; j++)
			cout << magic[i][j] << "  ";
		cout << endl;
	}
}
int main()
{
	// This code works for only odd numbers
	int n = 7;
	cout << "The magic sum is " << n * (n * n + 1) / 2 << endl;
	GenerateMagicSquare(n);
	return 0;
}