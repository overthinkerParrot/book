"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import BookCard from "./components/BookCard";
import { Input } from "@/components/ui/input"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"




export default function Home() {
    const { toast } = useToast()
    return (
        <div className="flex gap-10">
            <div className="flex flex-col gap-2 w-[30%]">
                <Dialog>
                <DialogTrigger className="text-white font-bold">
                        <div className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 p-2 w-[100%]">
                            Lend a book
                        </div>
                    </DialogTrigger>
                    <DialogContent className="dark text-white">
                        <DialogHeader>
                            <DialogTitle>Lend Book</DialogTitle>
                            <DialogDescription>
                            Enter Book Details for Lending
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Book Name
                                </Label>
                                <Input id="name" value="" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Book Description
                                </Label>
                                <Input id="username" value="" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="image" className="text-right">
                                    Cover Image
                                </Label>
                                <Input id="image" type="file" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="price" className="text-right">
                                    Price
                                </Label>
                                <Input id="price" className="col-span-3" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <Card className="dark">
                    <CardHeader>
                        <CardTitle>Lended Books</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableCaption>A list of your lent books.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Book</TableHead>
                                    <TableHead className="text-right">Return Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">Mein Kampf</TableCell>
                                    <TableCell className="text-right">15/03/24</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Mein Kampf</TableCell>
                                    <TableCell className="text-right">15/03/24</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Mein Kampf</TableCell>
                                    <TableCell className="text-right">15/03/24</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                    </CardContent>
                </Card>
            </div>
            <div className="flex flex-col gap-2 w-[50%]">
                <div className="flex align-middle justify-between items-center">
                    <span className="text-white font-bold text-3xl">Books</span>
                    <Input className="dark w-[50%]" placeholder="Search..." />
                </div>

                <div className="flex flex-col w-100 align-middle justify-center gap-4">
                    <BookCard bookName="Mein Kampf " bookDescription="Mein Kampf is a 1925 autobiographical manifesto by Nazi Party leader Adolf Hitler. The work describes the process by which Hitler became antisemitic and outlines his political ideology and future plans for Germany. Volume 1 of Mein Kampf was published in 1925 and Volume 2 in 1926." price={10.5} />
                    <BookCard bookName="Mein Kampf " bookDescription="Mein Kampf is a 1925 autobiographical manifesto by Nazi Party leader Adolf Hitler. The work describes the process by which Hitler became antisemitic and outlines his political ideology and future plans for Germany. Volume 1 of Mein Kampf was published in 1925 and Volume 2 in 1926." price={10.5} />
                    <BookCard bookName="Mein Kampf " bookDescription="Mein Kampf is a 1925 autobiographical manifesto by Nazi Party leader Adolf Hitler. The work describes the process by which Hitler became antisemitic and outlines his political ideology and future plans for Germany. Volume 1 of Mein Kampf was published in 1925 and Volume 2 in 1926." price={10.5} />
                    <BookCard bookName="Mein Kampf " bookDescription="Mein Kampf is a 1925 autobiographical manifesto by Nazi Party leader Adolf Hitler. The work describes the process by which Hitler became antisemitic and outlines his political ideology and future plans for Germany. Volume 1 of Mein Kampf was published in 1925 and Volume 2 in 1926." price={10.5} />
                    <BookCard bookName="Mein Kampf " bookDescription="Mein Kampf is a 1925 autobiographical manifesto by Nazi Party leader Adolf Hitler. The work describes the process by which Hitler became antisemitic and outlines his political ideology and future plans for Germany. Volume 1 of Mein Kampf was published in 1925 and Volume 2 in 1926." price={10.5} />
                    <BookCard bookName="Mein Kampf " bookDescription="Mein Kampf is a 1925 autobiographical manifesto by Nazi Party leader Adolf Hitler. The work describes the process by which Hitler became antisemitic and outlines his political ideology and future plans for Germany. Volume 1 of Mein Kampf was published in 1925 and Volume 2 in 1926." price={10.5} />
                </div>
            </div>
            <div className="w-[30%]">
                <Card className="dark ">
                    <CardHeader>
                        <CardTitle>Notifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Button
                            onClick={() => {
                                toast({
                                    title: "Request Accepted",
                                    description: "Friday, February 10, 2023 at 5:57 PM",
                                })
                            }}
                        >
                            Accept
                        </Button>
                        <Button
                            onClick={() => {
                                toast({
                                    title: "Request Rejected",
                                    description: "Friday, February 10, 2023 at 5:57 PM",
                                    variant: 'destructive'
                                })
                            }}
                            variant="destructive"
                        >
                            Reject
                        </Button>
                    </CardContent>
                </Card>
                <div className="dark">
                </div>

            </div>
        </div>
    );
}
