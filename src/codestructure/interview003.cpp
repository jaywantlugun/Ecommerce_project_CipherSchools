#include<iostream>
#include<string>
#include<map>
using namespace std;

class code{
    
    map<string,int> mp;

    int v1=0;
    int v2=0;
    string key1;
    string key2;
    public:
    

    void fun1(string arr[],int len){
         int n=len;
         for(int i=0;i<n;i++){
            mp[arr[i]]++;
         }
    }

    void fun2(){
        string ans;
        for(auto it=mp.begin();it!=mp.end();it++){
            
            cout<<it->first<<" "<<it->second<<endl;
            if(it->second > v1){
                v2=v1;
                key2=key1;
                key1=it->first;
                v1=it->second;
            }
            if(it->second < v1 && it->second > v2){
                v2=it->second;
                key2=it->first;
            }
           
        }

        cout<<"city : "<<key1<<endl;
        cout<<"2nd : "<<key2;

        
    }


};




int main(){

    string arr[]={"noida","delhi","delhi","delhi","delhi","punj","punj","punj","luck","luck","luck","luck","luck","varanasi","noida","delhi","delhi"};
    int n=sizeof(arr)/sizeof(arr[0]);
    code obj;
    obj.fun1(arr,n);
    obj.fun2();



    return 0;

}