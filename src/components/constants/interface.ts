interface Func {
  name: string;
  description: string;
  params: Array<Param>;
  result: Param;
  edit: string;
  default: string;
}

interface Param {
  name: string;
  type: string;
  example: string;
}

interface DataType {
  name: string;
  properties: Array<Param>;
}

interface Guide {
  title: string;
  content: string; // Markdown
}