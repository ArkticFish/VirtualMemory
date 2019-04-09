export class PageTable
{
    table: PT_Row[] = [];
}

export class PT_Row
{
    physicalPage: string = "";

    constructor(physicalPage: string)
    {
        this.physicalPage = physicalPage;
    }
}