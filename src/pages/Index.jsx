import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Paw } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-orange-100 to-rose-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-orange-800">All About Cats <Paw className="inline-block ml-2" /></h1>
        
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" alt="Cute cat" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg mb-8" />
        
        <p className="text-lg text-gray-700 mb-8">
          Cats are fascinating creatures that have been domesticated for thousands of years. Known for their independence, agility, and affectionate nature, cats make wonderful companions for millions of people around the world.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Characteristics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Excellent hunters with keen senses</li>
                <li>Flexible bodies and sharp retractable claws</li>
                <li>Independent yet affectionate with their owners</li>
                <li>Average lifespan of 12-18 years</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Popular Breeds</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Siamese</li>
                <li>Maine Coon</li>
                <li>Persian</li>
                <li>British Shorthair</li>
                <li>Sphynx</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <p className="text-center text-gray-600">
          Whether you're a cat owner or just an admirer, these furry friends never fail to bring joy and companionship to our lives.
        </p>
      </div>
    </div>
  );
};

export default Index;
