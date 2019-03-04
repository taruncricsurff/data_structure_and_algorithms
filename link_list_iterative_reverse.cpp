#include<iostream>
using namespace std;


struct node {

	int value;
	node * next;

};



int main() {

	struct node* head = new node;

	head->value = 1;
	head->next = new node;
	head->next->value = 2;
	head->next->next = new node;
	head->next->next->value = 3;
	head->next->next->next = new node;
	head->next->next->next->value = 4;
	head->next->next->next->next = NULL;




	node * temp = NULL;
	node * newhead = NULL;




	node *print  =  head;



	cout<<"original list .....\n";

	while(print!= NULL) {

		cout<<print<<"\n";
		print = print->next;


	}




	while(head !=NULL) {




		newhead = head;

		head = head->next;

		newhead->next = temp;


		temp = newhead;

	}


	cout<<"after reversing ...........\n";

	while(newhead != NULL) {


		cout<<newhead<<"\n";
		newhead = newhead->next;
	}

	return 0;

}



