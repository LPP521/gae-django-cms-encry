f23={};
f23.ts="8ABC7DLO5MN6Z9EFGdeJfghijkHIVrstuvwWSTUXYabclmnopqKPQRxyz01234";

f23.s52d=function(n)
{
	var c=n.charAt(0)*1;
	if(isNaN(c))return "";
	c=n.substr(1,c)*1;
	if(isNaN(c))return "";
	var nl=n.length,t=[],a,f,b,x=String(c).length+1,m=function(y){return f23.ts.indexOf(n.charAt(y))},N=f23.ts.length;
	if(nl!=x+c)return "";
	while(x<nl)
	{
		a=m(x++);
		if(a<5)f=a*N+m(x);
		else f=(a-5)*N*N+m(x)*N+m(x+=1);
		t[t.length]=String.fromCharCode(f);
		x++;
	}
	return t.join("");
}

function show (content) { document.write(f23.s52d(content)); }

