export interface Fragen
{
  FragenIndex:number,
  Frage:string,
  Antwort:Antwort[]
}
export interface Antwort
{
  i : number ,
  Antwort:string,
  this:boolean,
  richtig:boolean
}
export interface richtigOrFalsh
{
  richtigOrFalsh:boolean
}
