export class TLB
{
    table: TLB_Row[] = [];

    getPhysicalPage(tag: string): string
    {
        for (let index = 0; index < this.table.length; index++) {
            if (tag = this.table[index].tag)
                return this.table[index].physicalPage;
        }
        return "DISK"
    }
}

export class TLB_Row
{
    tag: string = "";
    physicalPage: string = "";

    constructor(tag: string, physicalPage: string)
    {
        this.tag = tag;
        this.physicalPage = physicalPage;
    }
}