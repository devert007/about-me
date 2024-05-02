#include <iostream>
#include <math.h>
using namespace std;

void generation_of_square(int size)
{
//all zero
int a[10][10];
for (int i=0;i<size;i++)
for (int j=0;j<size;j++)

  a[i][j]=0;
int i=size/2;
int j=size-1;
  for(int m=1;m<=size*size;)
  {
if (i==-1&&j==size)
        {
         j=size-2;
         i=0;
        }
    else
        { 
          if(j==size)
             j=0;

          if (i<0)
             i=size-1;
        }
if(a[i][j])
       {
         j=j-2;
         i++;
         continue;
       }
    else
     {
      a[i][j]=m;
       m++;
    }
    j++;
    i--;
  }
for(int i=0;i<size;i++)
{
  for(int j=0;j<size;j++)
   cout<<a[i][j]<<" ";
   cout<<'\n';
}
}



int main()
{
int n;
cout<<"enter a size of your square"<<'\t';
cin>>n;
cout<<"magic number is : "<<n*(n*n+1)/2<<'\n';
//random numbers of square
generation_of_square(n);
return 0;
}