"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Scissors,
  Edit,
  QrCode,
  Trash2,
  BarChart,
  Link as LinkIcon,
  Settings,
  LogOut,
  User,
  Bell,
  Menu,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock data for demonstration
const mockLinks = [
  {
    id: 1,
    originalUrl: "https://example.com/very/long/url/1",
    shortUrl: "https://clink.com/abc123",
    clicks: 1500,
    createdAt: "2023-01-15",
  },
  {
    id: 2,
    originalUrl: "https://example.com/another/long/url/2",
    shortUrl: "https://clink.com/def456",
    clicks: 2300,
    createdAt: "2023-02-20",
  },
  {
    id: 3,
    originalUrl: "https://example.com/yet/another/long/url/3",
    shortUrl: "https://clink.com/ghi789",
    clicks: 800,
    createdAt: "2023-03-10",
  },
];

const mockAnalyticsData = [
  { date: "2023-06-01", clicks: 50 },
  { date: "2023-06-02", clicks: 65 },
  { date: "2023-06-03", clicks: 45 },
  { date: "2023-06-04", clicks: 70 },
  { date: "2023-06-05", clicks: 85 },
  { date: "2023-06-06", clicks: 60 },
  { date: "2023-06-07", clicks: 75 },
];

export default function Dashboard() {
  const [links, setLinks] = useState(mockLinks);
  const [newUrl, setNewUrl] = useState("");
  const [activeView, setActiveView] = useState("dashboard");

  const handleCreateLink = (e: React.FormEvent) => {
    e.preventDefault();
    const newLink = {
      id: links.length + 1,
      originalUrl: newUrl,
      shortUrl: `https://clink.com/${Math.random().toString(36).substr(2, 6)}`,
      clicks: 0,
      createdAt: new Date().toISOString().split("T")[0],
    };
    setLinks([...links, newLink]);
    setNewUrl("");
  };

  const handleDeleteLink = (id: unknown) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Side Menu */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <Link href="/" className="flex items-center">
            <Scissors className="h-6 w-6 mr-2 text-blue-500" />
            <span className="text-2xl font-bold text-blue-600">Clink</span>
          </Link>
        </div>
        <nav className="mt-6">
          <Button
            variant={activeView === "dashboard" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveView("dashboard")}
          >
            <BarChart className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button
            variant={activeView === "links" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveView("links")}
          >
            <LinkIcon className="mr-2 h-4 w-4" />
            My Links
          </Button>
          <Button
            variant={activeView === "create" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveView("create")}
          >
            <Scissors className="mr-2 h-4 w-4" />
            Create New Link
          </Button>
          <Button
            variant={activeView === "settings" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveView("settings")}
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Menu */}
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open sidebar</span>
                  </Button>
                </div>
              </div>
              <div className="flex items-center">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">View notifications</span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-8 w-8 rounded-full"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src="/placeholder-avatar.jpg"
                          alt="@johndoe"
                        />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                          John Doe
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                          john@example.com
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
          {activeView === "dashboard" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Dashboard</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Clicks
                    </CardTitle>
                    <Scissors className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {links.reduce((sum, link) => sum + link.clicks, 0)}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Links
                    </CardTitle>
                    <LinkIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{links.length}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Avg. Clicks per Link
                    </CardTitle>
                    <BarChart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {(
                        links.reduce((sum, link) => sum + link.clicks, 0) /
                        links.length
                      ).toFixed(2)}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Top Performing Link
                    </CardTitle>
                    <LinkIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {
                        links.reduce(
                          (max, link) =>
                            max.clicks > link.clicks ? max : link,
                          links[0]
                        ).shortUrl
                      }
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Click Analytics</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockAnalyticsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="clicks" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          )}

          {activeView === "links" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">My Links</h2>
              <Card>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Original URL</TableHead>
                        <TableHead>Short URL</TableHead>
                        <TableHead>Clicks</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {links.map((link) => (
                        <TableRow key={link.id}>
                          <TableCell className="font-medium">
                            {link.originalUrl}
                          </TableCell>
                          <TableCell>{link.shortUrl}</TableCell>
                          <TableCell>{link.clicks}</TableCell>
                          <TableCell>{link.createdAt}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="icon">
                                <Edit className="h-4 w-4" />
                                <span className="sr-only">Edit link</span>
                              </Button>
                              <Button variant="outline" size="icon">
                                <QrCode className="h-4 w-4" />
                                <span className="sr-only">
                                  Generate QR code
                                </span>
                              </Button>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => handleDeleteLink(link.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                                <span className="sr-only">Delete link</span>
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeView === "create" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Create New Link</h2>
              <Card>
                <CardContent>
                  <form onSubmit={handleCreateLink} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="longUrl">Long URL</Label>
                      <Input
                        id="longUrl"
                        type="url"
                        placeholder="Enter a long URL to shorten"
                        value={newUrl}
                        onChange={(e) => setNewUrl(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit">
                      <Scissors className="mr-2 h-4 w-4" />
                      Create Short Link
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {activeView === "settings" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Settings</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                    Manage your account preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value="john@example.com"
                      readOnly
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" value="John Doe" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="marketing" />
                    <Label htmlFor="marketing">Receive marketing emails</Label>
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
