import React, { useState } from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Button } from './ui/Button';

export const Message: React.FC = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <Section className="min-h-[60vh] flex items-center justify-center py-10 mb-20">
      <div className="max-w-3xl mx-auto px-4 w-full">
        
        {!revealed ? (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20"
          >
             <Button 
               onClick={() => setRevealed(true)}
               className="bg-white/80 backdrop-blur text-romantic-600 border border-romantic-200 px-8 py-4 text-xl font-serif shadow-lg hover:shadow-xl hover:bg-white transition-all group rounded-2xl"
             >
               <span className="ml-3 group-hover:scale-110 transition-transform inline-block">💌</span>
               اضغطي هنا
             </Button>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="glass-card p-8 md:p-14 rounded-[2rem] shadow-xl relative overflow-hidden border border-white/70"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-gradient-to-br from-romantic-50 to-white"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
               <motion.div 
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ delay: 0.5, type: "spring" }}
                 className="mb-8 text-romantic-400"
               >
                  <Heart fill="currentColor" className="w-8 h-8 animate-pulse-slow" />
               </motion.div>
               
               <div className="font-serif text-xl md:text-2xl leading-[2.2] md:leading-[2.4] text-romantic-900 space-y-8">
                 <motion.p 
                   initial={{ opacity: 0 }} 
                   animate={{ opacity: 1 }} 
                   transition={{ delay: 1, duration: 1.5 }}
                   className="font-bold text-romantic-800"
                 >
                   "عيد ميلادك ليس مجرد يوم،<br/>
                   بل هو اليوم الذي وُلدت فيه سعادتي،<br/>
                   وكل عام وأنتِ نبضي الذي لا يهدأ 💗"
                 </motion.p>

                 <motion.p 
                   initial={{ opacity: 0 }} 
                   animate={{ opacity: 1 }} 
                   transition={{ delay: 3.5, duration: 1.5 }}
                 >
                   في يوم ميلادك، لا أحتفل فقط بعامٍ جديد من عمرك،<br/>
                   بل أحتفل بوجودك في حياتي،<br/>
                   بضحكتك التي تُنير أيامي،<br/>
                   وبقلبك الذي علّمني معنى الحب الحقيقي.
                 </motion.p>

                 <motion.p 
                   initial={{ opacity: 0 }} 
                   animate={{ opacity: 1 }} 
                   transition={{ delay: 7, duration: 1.5 }}
                 >
                   كل لحظة معك هي هدية،<br/>
                   وكل يوم بجانبك هو نعمة أحمد الله عليها.
                 </motion.p>

                 <motion.p 
                   initial={{ opacity: 0 }} 
                   animate={{ opacity: 1 }} 
                   transition={{ delay: 10, duration: 1.5 }}
                 >
                   أتمنى لك سعادة لا تنتهي،<br/>
                   وراحة تسكن قلبك،<br/>
                   ونجاحًا يرافق خطواتك أينما ذهبتِ.
                 </motion.p>

                 <motion.p 
                   initial={{ opacity: 0 }} 
                   animate={{ opacity: 1 }} 
                   transition={{ delay: 13, duration: 1.5 }}
                 >
                   أعدك أن أكون معك في الفرح قبل الحزن،<br/>
                   وفي القوة قبل الضعف،<br/>
                   وأن أبقى سندًا لك ما دامت الأيام تجمعنا.
                 </motion.p>

                 <motion.div 
                   initial={{ opacity: 0 }} 
                   animate={{ opacity: 1 }} 
                   transition={{ delay: 16, duration: 2 }}
                   className="pt-6 border-t border-romantic-200/50 mt-6"
                 >
                   <p className="font-bold text-2xl text-romantic-700">
                     كل عام وأنتِ أقرب إلى قلبي،<br/>
                     وأجمل في عيني،<br/>
                     وأغلى ما أملك.
                   </p>
                   <p className="mt-6 text-romantic-500 text-lg">
                     دمتِ لي حياةً،<br/>
                     ودام حبّنا نورًا لا ينطفئ 💗
                   </p>
                 </motion.div>
               </div>
            </div>
          </motion.div>
        )}

      </div>
    </Section>
  );
};