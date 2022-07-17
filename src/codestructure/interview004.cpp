#include<iostream>

using namespace std;


int main(){

int arr1[]={1,2,3,4,5,7};
int arr2[]={2,3,1,0,5,6};

int freq[7]={0};
for(int i=0;i<6;i++){
    freq[arr2[i]]++;
}

for(int i=0;i<6;i++){
    if(freq[arr1[i]]==0){
        cout<<arr1[i]<<endl;
    }
}


return 0;
}