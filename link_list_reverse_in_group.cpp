#include<iostream>
using namespace std;


struct list1 {
	int value;
	list1* next;

} *head;


//1->2->3->4->5->6->7->8->9->10->11


//3->2->1->null  6->5->4->null  9->8->7->null


//1->2->3->4->5->6

//3->2->1   6->5->4






void reverse(int count){

	int step = 0;
	list1* temphead = NULL;
	list1* temphead2 = NULL;
	list1* newhead = NULL;
	list1* finalhead = NULL;
	list1* temp = NULL;

	int count2 = 0;
	int count3=0;

	while(head != NULL) {

		temphead = head;

		while(step < count && head!=NULL) {
			// reverse the list with k size
			newhead =  head;
			head = head->next;   
			newhead->next = temp; 
			temp = newhead;  
			++ step;			
		}

		if(!count3) {
			finalhead = newhead;
			count3=1;
		}

		if(++count2>1) {
				
			temphead2->next = newhead; //connecting list of k size reverse lists
		}

		step = 0;
		temphead2 = temphead;
		temp = NULL;

	}

	head = finalhead;
}


int main(){

	int i =1;

	list1* list = new list1;
	list->value = i ;
	
	head = list;

	list->next = new list1;
	list->next->value = ++i;

	list->next->next = new list1;
	list->next->next->value = ++i;


	list->next->next->next = new list1;
	list->next->next->next->value = ++i;


	list->next->next->next->next = new list1;
	list->next->next->next->next->value = ++i;


	list->next->next->next->next->next = new list1;
	list->next->next->next->next->next->value = ++i;


	list->next->next->next->next->next->next = new list1;
	list->next->next->next->next->next->next->value = ++i;


	list->next->next->next->next->next->next->next = new list1;
	list->next->next->next->next->next->next->next->value = ++i;

				
	list->next->next->next->next->next->next->next->next = new list1;
	list->next->next->next->next->next->next->next->next->value = ++i;


	list->next->next->next->next->next->next->next->next->next = new list1;
	list->next->next->next->next->next->next->next->next->next->value = ++i;

	list->next->next->next->next->next->next->next->next->next->next = new list1;
	list->next->next->next->next->next->next->next->next->next->next->value = ++i;

	list->next->next->next->next->next->next->next->next->next->next->next = NULL;


	list1* iter = head;


	while(iter != NULL){

		cout<<iter<<"\n";
		cout<<iter->value<<"\n";
		iter = iter->next;

	}



	reverse(3);


cout<<"after reverse"<<head<<"\n";

	while(head != NULL){

		cout<<head<<"\n";
		cout<<head->value<<"\n";
		head = head->next;

	}

	return 0;

}