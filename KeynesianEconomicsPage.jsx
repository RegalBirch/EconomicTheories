import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const KeynesianEconomicsPage = () => {
  return (
    <section className="py-10 bg-gray-800 text-white min-h-screen flex justify-center items-start">
      <div className="max-w-4xl w-full mx-auto">
        <div className="px-4">
            <RouterLink
              to="/"
              className="inline-block mb-6 text-lg text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              ← Back to Overview
            </RouterLink>
        </div>
        <article className="bg-gray-700 p-8 rounded-lg shadow-lg mx-4 sm:mx-0">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-blue-500">
            Keynesian Economics
          </h1>

          <div className="flex justify-center mb-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJ8ODo3HFWebsD_Qo6nh2WEgfx3sMfz8KYw&s"
              alt="John Maynard Keynes"
              className="rounded-full shadow-lg w-36 h-36 sm:w-48 sm:h-48 object-cover border-4 border-blue-500"
            />
          </div>

          <div className="text-center mb-8">
            <p className="text-lg sm:text-xl italic text-gray-300">
            “In the long run, we’re all dead.”
            </p>
            <span className="block text-sm text-gray-400 mt-2">
              — John Maynard Keynes
            </span>
          </div>

          <div className="space-y-6 text-gray-300">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">
                History
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
              The name Keynesian comes from the creator, John Maynard Keynes. Keynesian economics developed out of necessity, namely the Great Depression that took place from 1929 to 1939. During the Great Depression, monetary policy by the Federal Reserve not only failed to counteract the Great Depression, but assisted in drawing out the recovery of America. As such, a new economic theory was brought to the table known as Keynesian economics. Instead of waiting for the economy to self correct, government intervention was needed to stabilize the economy. As such the movement from using a contractionary economic policy to an expansionary economic policy was realized.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">
              Characteristics:
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-2">
        
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-base sm:text-lg">
                <li><strong>Government Intervention and Aggregate Demand:</strong> By increasing government spending to stimulate the economy, especially during times of economic recession, aggregate demand shifts right pulling the economy out of a recessionary gap.</li>
                <img src="https://financetrain.sgp1.cdn.digitaloceanspaces.com/shift-demand-curve.png"
                alt="Aggregate Demand"
                className="mx-auto h-100 w-100"></img>
                <li><strong>Expansionary Fiscal Policy:</strong> Keynesian economics focuses heavily on expansionary fiscal policy. Expansionary fiscal policy includes increasing government spending, decreasing taxes, and government transfer payments. Keynesian economists believe that insufficient aggregate demand is the primary cause for economic downturns and all 3 tools in expansionary fiscal policy serve to address that issue by increasing aggregate demand by either increasing, consumer, investment, or government spending.</li>
                <li><strong>Sticky Wages and Prices:</strong> Sticky wages and prices are the concept that wages and prices take time to adjust to the economy. As such, Keynes argued that markets can not rely on long term self correction and government action is needed to stablize the economy.</li>
                <li><strong>Multiplier Effect:</strong> The multiplier effect says that an initial increase from government spending or investment spending leads to increased income for businesses and households. The businesses and households spend that portion of their increased income which becomes income for others and the cycle repeats itself hence the name multiplier. The multiplier effect causes an increase in government and investment spending to have a larger increase in aggregate demand than just its initial spending.</li>
                <li><strong>Crowding Out:</strong> Crowding out is the phenonmenon that when government spending increases, they demand more from the loanable funds market, shifting demand right. As the government deficit and spending increased, they are crowding out private investment by taking loans and raising interest rates. Crowding out is often cited as an argument against the positive effects that Keynesian Economics has on the economy.</li>
                <img src="https://s3.eu-central-1.amazonaws.com/studysmarter-mediafiles/media/1865576/summary_images/effect.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4OLDUDE42UZHAIET%2F20250508%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250508T193749Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8b70fd4b82194acb9175d77f5193bb32b7c77c02034169e4838f59fe55a94a1d"
                alt="Loanable Funds"
                className="mx-auto h-100 w-100"></img>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">
                Example
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
              During the Great Depression, Keynesian economics influenced the U.S. government's decision to increase public spending and intervene in the economy through large scale programs intended to help people survive by providing jobs and food. President Franklin D. Roosevelt's New Deal embodied this approach by funding infrastructure projects, creating public works jobs, and expanding social welfare programs. These actions were intended to stimulate demand, reduce unemployment, and restore confidence in the economy. Although, the United States did not recover until World War II, Keynesian economics changed the way people thought of the economy. Instead of letting it self correct, the government can intervene and help in the correction process.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default KeynesianEconomicsPage;