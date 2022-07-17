#include<iostream>
using namespace std;

bool check(int n){
    for(int i=2;i*i<=n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}


int main(){

    int n=999999;
    
    while(check(n)!=true){
        n--;
    }

    cout<<n;
    return 0;

}