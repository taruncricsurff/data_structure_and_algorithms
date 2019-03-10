#include <iostream>
using namespace std;

struct node {

	int value;
	node * next;

};

node* rev(node* head) {

	if(head->next == NULL) {

		return head;

	} else {

		node* temp = head;
		rev(head->next)->next = temp;
		temp->next = NULL;
		return temp;
	}
}


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


	node* m =  head;
	node*n;

	cout<<"original list\n";
	
	while(head != NULL) {

		cout<<head<<"\n";

		if(head->next == NULL)
			n = head;

		head = head->next;

	}

	head=m;rev(m);


	while(n != NULL) {

		cout<<n<<"\n";
		n = n->next;
	}

	return 0;

}





